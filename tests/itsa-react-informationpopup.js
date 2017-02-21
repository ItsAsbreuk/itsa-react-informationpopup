/*global describe, it, before, after */

"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-addons-test-utils");

const chai = require("chai");
const expect = chai.expect;
const equalJSX = require("chai-equal-jsx");
const renderer = TestUtils.createRenderer();

chai.use(equalJSX);

const Component = require("../lib/component.jsx");

describe("React Component", function () {

    before(function () {
        this.jsdom = require("jsdom-global")();
    });

    after(function () {
        this.jsdom();
    });

    it("Rendering component", function () {
        renderer.render(<Component popup="ok">i</Component>);
        const actual = renderer.getRenderOutput();
        const expected = (
            <div className="itsa-informationpopup">
                <div
                    className="itsa-informationpopup-icon"
                    onMouseEnter={function noRefCheck() {}}
                    onMouseLeave={function noRefCheck() {}} >
                    i
                </div>
                <div className="itsa-informationpopup-popup itsa-informationpopup-hidden">
                    ok
                </div>
            </div>
        );
        expect(actual).to.equalJSX(expected);
    });

});
