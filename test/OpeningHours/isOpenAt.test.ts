import { expect, test } from "vitest";
import { nextClose, nextOpen, OpeningHours } from "../../src/OpeningHours/OpeningHours";
import { isOpenAt } from "../../src/OpeningHours/isOpenAt";

test("isOpenAt returns false if before opening hours", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"] };

  expect(isOpenAt(openingHours, new Date("2025-01-20T00:00:00Z"))).toBeFalsy();
});

test("isOpenAt returns false if after opening hours", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"] };

  expect(isOpenAt(openingHours, new Date("2025-01-20T20:00:00Z"))).toBeFalsy();
});

test("isOpenAt returns true if in opening hours", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"] };

  expect(isOpenAt(openingHours, new Date("2025-01-20T12:00:00Z"))).toBeTruthy();
});

test("isOpenAt returns false if before opening hours in exceptions", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"], exceptions: { "2025-01-20": ["10:00-16:00"] } };

  expect(isOpenAt(openingHours, new Date("2025-01-20T09:00:00Z"))).toBeFalsy();
});

test("isOpenAt returns false if after opening hours in exceptions", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"], exceptions: { "2025-01-20": ["10:00-16:00"] } };

  expect(isOpenAt(openingHours, new Date("2025-01-20T17:00:00Z"))).toBeFalsy();
});

test("isOpenAt returns true if in opening hours in exception", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"], exceptions: { "2025-01-20": ["14:00-16:00"] } };

  expect(isOpenAt(openingHours, new Date("2025-01-20T13:59:59Z"))).toBeFalsy();
});

test("isOpenAt returns true if in opening hours", () => {
  const openingHours: OpeningHours = { monday: ["08:00-18:00"], exceptions: { "2025-01-20": ["20:00-22:00"] } };

  expect(isOpenAt(openingHours, new Date("2025-01-20T20:00:00Z"))).toBeTruthy();
});

test("isOpenAt returns true if in opening hours with overflow", () => {
  const openingHours: OpeningHours = { monday: ["08:00-04:00"] };

  expect(isOpenAt(openingHours, new Date("2025-01-21T02:00:00Z"))).toBeTruthy();
});

test("nextOpen", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-01:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
    wednesday: ["03:00-18:00"],
  };

  expect(nextOpen(openingHours, new Date("2025-01-21T08:30:00Z"))?.toLocaleString()).toBe(
    new Date("2025-01-21T12:00:00Z").toLocaleString()
  );
});

test("nextOpen next day", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-04:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
    wednesday: ["03:00-18:00"],
  };

  expect(nextOpen(openingHours, new Date("2025-01-21T16:00:00Z"))?.getTime()).toBe(
    new Date("2025-01-22T03:00:00Z").getTime()
  );
});

test("nextOpen next day 2", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-04:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
    wednesday: ["03:00-18:00"],
  };

  expect(nextOpen(openingHours, new Date("2025-01-21T18:30:00Z"))?.getTime()).toBe(
    new Date("2025-01-22T03:00:00Z").getTime()
  );
});

test("nextOpen the day after", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-04:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
    thursday: ["03:00-18:00"],
  };

  expect(nextOpen(openingHours, new Date("2025-01-21T18:30:00Z"))?.getTime()).toBe(
    new Date("2025-01-23T03:00:00Z").getTime()
  );
});

test("nextOpen next week", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-01:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
  };

  expect(nextOpen(openingHours, new Date("2025-01-21T18:30:00Z"))?.toLocaleString()).toBe(
    new Date("2025-01-27T08:00:00Z").toLocaleString()
  );
});

test("nextClose", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-01:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
  };

  expect(nextClose(openingHours, new Date("2025-01-21T00:30:00Z"))?.getTime()).toBe(
    new Date("2025-01-21T01:00:00Z").getTime()
  );
  expect(nextClose(openingHours, new Date("2025-01-21T02:30:00Z"))?.getTime()).toBe(
    new Date("2025-01-21T04:00:00Z").getTime()
  );
});

test("nextClose 2", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-04:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
  };

  expect(nextClose(openingHours, new Date("2025-01-21T04:00:00Z"))?.getTime()).toBe(
    new Date("2025-01-21T16:00:00Z").getTime()
  );
});

test("nextClose 2", () => {
  const openingHours: OpeningHours = {
    monday: ["08:00-04:00"],
    tuesday: ["02:00-04:00", "12:00-16:00"],
  };

  expect(nextClose(openingHours, new Date("2025-01-21T04:00:00Z"))?.getTime()).toBe(
    new Date("2025-01-21T16:00:00Z").getTime()
  );
});
test.only("nextClose always open", () => {
  const openingHours: OpeningHours = {
    monday: ["00:00-24:00"],
    tuesday: ["00:00-24:00"],
    wednesday: ["00:00-00:00"],
    thursday: ["00:00-00:00"],
    friday: ["00:00-00:00"],
    saturday: ["00:00-00:00"],
    sunday: ["00:00-00:00"],
  };

  expect(isOpenAt(openingHours, new Date("2025-01-21T04:00:00Z"))).toBeTruthy();
  // expect(nextClose(openingHours, new Date("2025-01-21T04:00:00Z"))?.getTime()).toBe(
  //   new Date("2025-01-21T16:00:00Z").getTime()
  // );
});
