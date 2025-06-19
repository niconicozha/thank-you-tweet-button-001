import { expect, test } from "@jest/globals";
import { tweetButton } from "../tweetButton";

test("tweetButton returns a truthy value", () => {
  expect(tweetButton(5, "React Image Grid Gallery")).toBeTruthy();
});
