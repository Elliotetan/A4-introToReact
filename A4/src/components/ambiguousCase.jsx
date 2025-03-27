//import css
import { useState } from 'react'



function ambiguousCase() {
    document.getElementById("amb-result").value = "";
    const angle = Number(document.getElementById("angle-a-amb").value);
    const sideA = Number(document.getElementById("side-a-amb").value);
    const sideB = Number(document.getElementById("side-b-amb").value);
    let hy = sideB * (Math.sin((angle * (Math.pi / 180))));

    if (0 < angle <= 90) {
        if (sideA < hy) {
            document.getElementById("amb-result").value = "No triangle";
        } else if (sideA === hy) {
            document.getElementById("amb-result").value = "Right triangle";
        } else if (sideA > sideB) {
            document.getElementById("amb-result").value = "One triangle";
        } else if (hy < sideA < sideB) {
            document.getElementById("amb-result").value = "Two triangles (ambiguous case)";
        }
    } else if (90 < angle < 180) {
        if (sideA < sideB || sideA === sideB) {
            document.getElementById("amb-result").value = "No triangle";
        } else if (sideA > sideB) {
            document.getElementById("amb-result").value = "One triangle";
        }
    }
}