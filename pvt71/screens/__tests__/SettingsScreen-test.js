import "react-native";
import React from "react";
import SettingsScreen  from "../SettingsScreen";
import renderer from "react-test-renderer";

describe("Setting Screen tests", () => {
    describe("Snapshot test", () => {
        it("renders correctly", () => {
        const tree = renderer.create(<SettingsScreen />).toJSON();
        expect(tree).toMatchSnapshot();
        });
    });
});