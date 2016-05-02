import Command from "./Command";
import Environment from "./Environment";
import { Math, DisplayMath } from "./Math";
import Document from "./Document";
import { Text, Paragraph } from "./Text";

let doc = new Document("report");

  let env = new Environment("testEnv");
    let dmath = new DisplayMath("6+4= \\beta");
    env.append(dmath);
  doc.append(env);

  let text = new Text("Inline text ");
  let math = new Math("3+2 = \\alpha");
  let text2 = new Text(" wow text.");
  doc.append(text, math, text2);

  let p = new Command("~",[]);
  doc.append(p);


console.log(doc.render());