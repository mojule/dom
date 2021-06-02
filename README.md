# dom

Hyperscript-like DOM functions for HTML and SVG

Assumes global document object - use `jsdom-global` or similar in node

```ts
import { 
  h, div, span, text, fragment, attr, svg, circle, attr 
} from '@mojule/dom'

// custom element
const customEl = h( 'my-element', { class: 'foo' } )

// 0 ore more attribute or node or text arguments
const divEl = div( { id: 'bar' }, span( 'hello, ' ), 'world' )

// 0 or more string arguments
const textNode = text( 'hello, ', 'world' )

// style is special
const styleDivEl = div( { style: { color: 'red', padding: '1rem' } } )

// arrays in attributes are joined by space, numbers are converted to string
const svgEl = svg(   
  { viewBox: [ 0, 0, 256, 256 ], width: 256, height = 256 },
  circle({ cx: 128, cy: 128, r: 64, fill: 'black' })
)

// data is special - object should have string values
const dataDivEl = div( { data: { x: '1', y: '1' }  } )

// apply attributes to existing object
attr( divEl, { class: 'foo' } )
```

## license 

MIT License

Copyright (c) 2021 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
