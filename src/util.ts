import { fragment, style } from './h'
import { isHTMLOrSVGElement } from './predicates'
import { ElementAttributes, StrictSelect } from './types'

export const emptyElement = ( el: Element ) => {
  while( el.firstChild )
    el.removeChild( el.firstChild )
}

const styleKey = 'style'
const dataKey = 'data'

export const attr = (el: Element, ...attributeRecords: ElementAttributes[]) => {
  attributeRecords.forEach(
    attributes => {
      Object.keys(attributes).forEach(
        key => {
          if (key === styleKey) {
            if (styleKey in el) {
              const value = attributes[key]

              if (typeof value === 'string') {
                el.setAttribute('style', value)

                return
              }

              const styleTarget = el[styleKey]

              try {
                Object.assign(styleTarget, value)
              } catch (err) {
                console.warn('setting style on el', { styleTarget, value })

                throw err
              }
            }

            return
          }

          if( key === dataKey && isHTMLOrSVGElement( el ) ){
            Object.assign( el.dataset, attributes[ key ] )

            return
          }

          const attributeValue = attributes[key]

          const value = (
            Array.isArray( attributeValue ) ?  
            attributeValue.join( ' ' ) :
            String(attributeValue)
          )

          el.setAttribute(key, value)
        }
      )
    }
  )
}

export const strictSelect: StrictSelect = (
  selectors: string, el: ParentNode = document
) => {
  const result = el.querySelector(selectors)

  if (result === null)
    throw Error(`Expected ${selectors} to match something`)

  return result
}

export const decorateData = (
  data: Record<string,string>, ...els: HTMLElement[]
) => {
  els.forEach( el => Object.assign( el.dataset, data ) )

  return fragment( ...els )
}

export const decorateAttributes = (
  attrs: ElementAttributes, ...els: HTMLElement[]
) => {
  els.forEach( el => {
    attr( el, attrs )
  } )

  return fragment( ...els )
}

export const unwrap = ( el: HTMLElement ) => {
  const { parentElement } = el

  if( parentElement === null ) throw Error( 'Expected parentElement' )

  while( el.firstChild ){
    parentElement.insertBefore( el.firstChild, el )
  }

  el.remove()
}

export const css = (strings: TemplateStringsArray, ...keys: string[]) =>
  style(
    strings.map((s, i) => s + (keys[i] || '')).join('')
  )