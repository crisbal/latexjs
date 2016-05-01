# latexjs



## Example

Using ES6 Javascript

```javascript
let doc = new Document("report");

let env = new Environment("testEnv");
    let dmath = new DisplayMath("6+4=10 \\beta");
    env.append(dmath);
doc.append(env);

let text = new Text("Inline text ");
let math = new Math("3+2 = \\alpha");
let text2 = new Text(" wow text.");
doc.append(text, math, text2);

let p = new Paragraph("This is a paragraph.");
doc.append(p);

console.log(doc.render());
```

Will print

```
\documentclass{report}
\begin{document}
\begin{testEnv}
$$6+4=10 \beta$$
\end{testEnv}
Inline text $3+2 = \alpha$ wow text.

This is a paragraph.

\end{document}
```