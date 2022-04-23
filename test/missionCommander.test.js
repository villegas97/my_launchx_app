const missionCommander = require("./../app/missionCommander");
describe("Unit Test for missionCommander Class", () => {
  test("1) Create a mission commander objet", () => {
    const myMissionCommander = new missionCommander("Villegas");
    expect(myMissionCommander.name).toBe("Villegas");
  });
});
