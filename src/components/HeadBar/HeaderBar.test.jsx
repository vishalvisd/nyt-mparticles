import {expect, beforeEach, test} from "vitest"
import {render, screen, cleanup} from "../../../test-utils";
import HeadBar from "./HeadBar";

beforeEach(()=>{
    cleanup();
})

test("it should render HeadBar Component", ()=>{
   render(<HeadBar loading={false} />);
    const HeaderBarElement = screen.getByTestId("data-HeaderBar");
    expect(HeaderBarElement).toBeInTheDocument();
});

test("it should show linear progress animation on HeadBar component when loading prop is true", ()=>{
    render(<HeadBar loading={true} />);
    const HeaderBarElement = screen.getByTestId("data-HeaderBar");
    const LinerProgressElement = screen.getByTestId("data-HeaderBar-LinearProgress");
    expect(HeaderBarElement).toContainElement(LinerProgressElement);
});

test("it should NOT show linear progress animation on HeadBar component when loading prop is false", ()=>{
    render(<HeadBar loading={false} />);
    expect(() => screen.getByTestId("data-HeaderBar-LinearProgress")).toThrow('Unable to find an element')
});
