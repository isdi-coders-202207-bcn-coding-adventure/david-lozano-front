import { render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("Given the Counter component", () => {
  describe("When it's instantiated", () => {
    test("Then setInterval has been called", () => {
      jest.spyOn(global, "setInterval");

      render(<Counter />);

      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    describe("And left time is '12' days , '14' hours, '23' and seconds '33' minutes", () => {
      test("Then should show that values in each type of time", () => {
        const stateValue = {
          days: 12,
          hours: 14,
          minutes: 23,
          seconds: 33,
        };
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation(() => [stateValue, jest.fn()]);

        render(<Counter />);
        const days = screen.getByText("12");
        const hours = screen.getByText("14");
        const minutes = screen.getByText("23");
        const seconds = screen.getByText("33");

        expect(days).toBeInTheDocument();
        expect(hours).toBeInTheDocument();
        expect(minutes).toBeInTheDocument();
        expect(seconds).toBeInTheDocument();
      });
    });

    describe("And left days is '2', hours '4', minutes '3 and seconds '1'", () => {
      test("Then should show '02' days, '04' hours, '03' minutes and '01' seconds", () => {
        const stateValue = {
          days: 2,
          hours: 4,
          minutes: 3,
          seconds: 1,
        };
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation(() => [stateValue, jest.fn()]);

        render(<Counter />);
        const days = screen.getByText("02");
        const hours = screen.getByText("04");
        const minutes = screen.getByText("03");
        const seconds = screen.getByText("01");

        expect(days).toBeInTheDocument();
        expect(hours).toBeInTheDocument();
        expect(minutes).toBeInTheDocument();
        expect(seconds).toBeInTheDocument();
      });

      test("Then function setter of useState has been called", () => {
        jest.useFakeTimers();
        const stateValue = {
          days: 2,
          hours: 4,
          minutes: 3,
          seconds: 1,
        };

        const mockSetStateValue = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation(() => [stateValue, mockSetStateValue]);
        render(<Counter />);
        jest.advanceTimersByTime(1000);

        expect(mockSetStateValue).toHaveBeenCalled();
      });
    });
  });
});
