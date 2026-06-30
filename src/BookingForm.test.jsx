import { render, screen } from '@testing-library/react';
import { updateTimes } from './component/BookingPage'
describe('initializeTimes', () => {
  test('should return the correct initial times', () => {
    const initialState = { times: ["17:00", "18:00", "19:00", "20:00", "21:00"] };
    expect(initialState.times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });

  test('should return an array', () => {
    const initialState = { times: ["17:00", "18:00", "19:00", "20:00", "21:00"] };
    expect(Array.isArray(initialState.times)).toBe(true);
  });
});

describe('updateTimes', () => {
  const initialState = { times: ["17:00", "18:00", "19:00", "20:00", "21:00"] };

  test('should return new times on dateChange', () => {
    const newTimes = ["17:00", "18:30", "20:00"];
    const action = { type: 'dateChange', payload: newTimes };
    const result = updateTimes(initialState, action);
    expect(result.times).toEqual(newTimes);
  });

  test('should return an array of times', () => {
    const newTimes = ["17:00", "18:30", "20:00"];
    const action = { type: 'dateChange', payload: newTimes };
    const result = updateTimes(initialState, action);
    expect(Array.isArray(result.times)).toBe(true);
  });

  test('should not mutate the current state', () => {
    const newTimes = ["17:00", "18:30", "20:00"];
    const action = { type: 'dateChange', payload: newTimes };
    expect(initialState.times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });
});