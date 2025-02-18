/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  WasabiOption,
  WasabiOption_Approval,
  WasabiOption_ApprovalForAll,
  WasabiOption_OwnershipTransferred,
  WasabiOption_Transfer,
} from "generated";

WasabiOption.Approval.handler(async ({ event, context }) => {
  const entity: WasabiOption_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.WasabiOption_Approval.set(entity);
});

WasabiOption.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: WasabiOption_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.WasabiOption_ApprovalForAll.set(entity);
});

WasabiOption.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: WasabiOption_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.WasabiOption_OwnershipTransferred.set(entity);
});

WasabiOption.Transfer.handler(async ({ event, context }) => {
  const entity: WasabiOption_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.WasabiOption_Transfer.set(entity);
});
