import assert from "assert";
import { 
  TestHelpers,
  WasabiOption_Approval
} from "generated";
const { MockDb, WasabiOption } = TestHelpers;

describe("WasabiOption contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for WasabiOption contract Approval event
  const event = WasabiOption.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("WasabiOption_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await WasabiOption.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualWasabiOptionApproval = mockDbUpdated.entities.WasabiOption_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedWasabiOptionApproval: WasabiOption_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualWasabiOptionApproval, expectedWasabiOptionApproval, "Actual WasabiOptionApproval should be the same as the expectedWasabiOptionApproval");
  });
});
