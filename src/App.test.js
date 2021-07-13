import App from "./App";
import { mount } from "enzyme";
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ key: "1", key1: "2" }) })
);
describe("Init", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("List of people");
  });
  test("render the click event of decrrment button and decrement counter value", () => {
    // console.log(wrapper.debug());
    // wrapper.find("#add").simulate("click");
    // console.log(wrapper.debug());
  });
});
