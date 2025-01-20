import { expect, test } from "vitest";
import { OpeningHours } from "../../src/OpeningHours/OpeningHours";
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
