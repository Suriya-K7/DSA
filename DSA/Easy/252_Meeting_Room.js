/* 
Meeting Rooms
Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.
Example 1:
Input: intervals = [(0,30),(5,10),(15,20)]
Output: false
Explanation:
(0,30) and (5,10) will conflict
(0,30) and (15,20) will conflict
Example 2:
Input: intervals = [(5,8),(9,15)]
Output: true
*/

/**
 * **meetingRoom Function**
 *
 * Determines whether a person can attend **all meetings** without any time conflicts.
 *
 * ### Logic:
 * - First, the list of meeting intervals is **sorted by start time**.
 * - Then, it checks for **overlap between consecutive intervals**.
 *   - If the end time of the current meeting is **greater than** the start time of the next meeting, a conflict exists.
 * - If no overlaps are found, all meetings can be scheduled.
 *
 * ### Time Complexity: O(n log n) — for sorting
 * ### Space Complexity: O(1) — constant extra space
 *
 * ### Params:
 * - `intervals` (`number[][]`) — An array of intervals where each interval is a 2-element array `[start, end]`.
 *
 * ### Returns:
 * - `boolean` — Returns `true` if all meetings can be attended without overlap, else `false`.
 *
 * ### Example:
 * ```js
 * meetingRoom([[0, 30], [5, 10], [15, 20]]); // false
 * meetingRoom([[5, 8], [9, 15]]);           // true
 * ```
 *
 * @note This is a common interview problem to test sorting + interval comparison logic (e.g., Leetcode #252).
 * @tip Sorting by start time ensures we only need to compare adjacent intervals.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function meetingRoom(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  return true;
}

let intervals = [
  [0, 30],
  [15, 20],
  [5, 10],
];
console.log(meetingRoom(intervals));
intervals = [
  [7, 10],
  [2, 4],
];
console.log(meetingRoom(intervals));
