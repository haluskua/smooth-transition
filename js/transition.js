import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  // page coming in from About
  in({ from, to, done }) {
    const tl = new TimelineLite();
    tl.fromTo(to, 0.4, { left: "-100%", top: "50%" }, { left: "0%" })
      .fromTo(
        to,
        0.4,
        { height: "0.3vh" },
        {
          height: "90vh",
          top: "10%",
          onComplete: function() {
            from.remove();
            done();
          }
        }
      )
      .fromTo(to.children[0], 0.7, { opacity: 0 }, { opacity: 1 });
  }
  // page going out is Home Page
  out({ from, done }) {
    done();
  }
}
export default Fade;
