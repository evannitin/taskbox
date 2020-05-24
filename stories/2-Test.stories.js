import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, color} from "@storybook/addon-knobs/react"

// export default {
//     title: "Test"
// };

// export const test = () =>  (
//     <textarea onClick={action("clicked")}>
//         Hong Test area in story book
//     </textarea>
//     );

//====Code Without refactoring.========
// const stories = storiesOf("Storybook knobs", module);
// stories.addDecorator(withKnobs);

// stories.add("with a button", () => 
//     (<button disabled={false}>{text("Label", "Hi guys")}</button>)
// );

//== Code refactoring====
storiesOf("Storybook knobs", module)
.addDecorator(withKnobs)

.add("with a button", () =>  (
    <button 
        disabled={boolean("Disabled", false)}
        style={{color: color("Color", "red")}}
    >
        {text("Label", "Hi guys")}
    </button>
))

.add("as dynamic variable", () =>{
    const name = text("Name", "Nitin");
    const content = `Hi I'm ${name}. Nice to meet you`;

    return <div>{content}</div>
    
});