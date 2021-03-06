// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class WrappedAsset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WrappedAsset entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WrappedAsset entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WrappedAsset", id.toString(), this);
  }

  static load(id: string): WrappedAsset | null {
    return store.get("WrappedAsset", id) as WrappedAsset | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenSymbol(): string {
    let value = this.get("tokenSymbol");
    return value.toString();
  }

  set tokenSymbol(value: string) {
    this.set("tokenSymbol", Value.fromString(value));
  }

  get tokenName(): string {
    let value = this.get("tokenName");
    return value.toString();
  }

  set tokenName(value: string) {
    this.set("tokenName", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get initTxHash(): string {
    let value = this.get("initTxHash");
    return value.toString();
  }

  set initTxHash(value: string) {
    this.set("initTxHash", Value.fromString(value));
  }

  get initialSupply(): string {
    let value = this.get("initialSupply");
    return value.toString();
  }

  set initialSupply(value: string) {
    this.set("initialSupply", Value.fromString(value));
  }
}

export class WrappedAssetSupply extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WrappedAssetSupply entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WrappedAssetSupply entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WrappedAssetSupply", id.toString(), this);
  }

  static load(id: string): WrappedAssetSupply | null {
    return store.get("WrappedAssetSupply", id) as WrappedAssetSupply | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenSymbol(): string {
    let value = this.get("tokenSymbol");
    return value.toString();
  }

  set tokenSymbol(value: string) {
    this.set("tokenSymbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get currentSupply(): string {
    let value = this.get("currentSupply");
    return value.toString();
  }

  set currentSupply(value: string) {
    this.set("currentSupply", Value.fromString(value));
  }
}

export class WrappedAssetTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save WrappedAssetTransfer entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WrappedAssetTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WrappedAssetTransfer", id.toString(), this);
  }

  static load(id: string): WrappedAssetTransfer | null {
    return store.get("WrappedAssetTransfer", id) as WrappedAssetTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenSymbol(): string {
    let value = this.get("tokenSymbol");
    return value.toString();
  }

  set tokenSymbol(value: string) {
    this.set("tokenSymbol", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }

  get block(): i32 {
    let value = this.get("block");
    return value.toI32();
  }

  set block(value: i32) {
    this.set("block", Value.fromI32(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class WrappedAssetMint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WrappedAssetMint entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WrappedAssetMint entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WrappedAssetMint", id.toString(), this);
  }

  static load(id: string): WrappedAssetMint | null {
    return store.get("WrappedAssetMint", id) as WrappedAssetMint | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenSymbol(): string {
    let value = this.get("tokenSymbol");
    return value.toString();
  }

  set tokenSymbol(value: string) {
    this.set("tokenSymbol", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }

  get block(): i32 {
    let value = this.get("block");
    return value.toI32();
  }

  set block(value: i32) {
    this.set("block", Value.fromI32(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class WrappedAssetTrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WrappedAssetTrade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WrappedAssetTrade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WrappedAssetTrade", id.toString(), this);
  }

  static load(id: string): WrappedAssetTrade | null {
    return store.get("WrappedAssetTrade", id) as WrappedAssetTrade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get pairAddress(): string {
    let value = this.get("pairAddress");
    return value.toString();
  }

  set pairAddress(value: string) {
    this.set("pairAddress", Value.fromString(value));
  }

  get assetBought(): string {
    let value = this.get("assetBought");
    return value.toString();
  }

  set assetBought(value: string) {
    this.set("assetBought", Value.fromString(value));
  }

  get amountBought(): string {
    let value = this.get("amountBought");
    return value.toString();
  }

  set amountBought(value: string) {
    this.set("amountBought", Value.fromString(value));
  }

  get assetSold(): string {
    let value = this.get("assetSold");
    return value.toString();
  }

  set assetSold(value: string) {
    this.set("assetSold", Value.fromString(value));
  }

  get amountSold(): string {
    let value = this.get("amountSold");
    return value.toString();
  }

  set amountSold(value: string) {
    this.set("amountSold", Value.fromString(value));
  }

  get block(): i32 {
    let value = this.get("block");
    return value.toI32();
  }

  set block(value: i32) {
    this.set("block", Value.fromI32(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}
