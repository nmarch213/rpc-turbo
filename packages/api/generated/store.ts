/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "store";

export interface GetStoresRequest {
  id: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
}

/** The response message containing the stores */
export interface GetStoresReply {
  stores: Store[];
}

function createBaseGetStoresRequest(): GetStoresRequest {
  return { id: "" };
}

export const GetStoresRequest = {
  encode(message: GetStoresRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStoresRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStoresRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStoresRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetStoresRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<GetStoresRequest>): GetStoresRequest {
    return GetStoresRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStoresRequest>): GetStoresRequest {
    const message = createBaseGetStoresRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseStore(): Store {
  return { id: "", name: "", address: "" };
}

export const Store = {
  encode(message: Store, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Store {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Store {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: Store): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<Store>): Store {
    return Store.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Store>): Store {
    const message = createBaseStore();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseGetStoresReply(): GetStoresReply {
  return { stores: [] };
}

export const GetStoresReply = {
  encode(message: GetStoresReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stores) {
      Store.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStoresReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStoresReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stores.push(Store.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStoresReply {
    return { stores: Array.isArray(object?.stores) ? object.stores.map((e: any) => Store.fromJSON(e)) : [] };
  },

  toJSON(message: GetStoresReply): unknown {
    const obj: any = {};
    if (message.stores) {
      obj.stores = message.stores.map((e) => e ? Store.toJSON(e) : undefined);
    } else {
      obj.stores = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetStoresReply>): GetStoresReply {
    return GetStoresReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetStoresReply>): GetStoresReply {
    const message = createBaseGetStoresReply();
    message.stores = object.stores?.map((e) => Store.fromPartial(e)) || [];
    return message;
  },
};

/** The greeting service definition. */
export type StoresServiceDefinition = typeof StoresServiceDefinition;
export const StoresServiceDefinition = {
  name: "StoresService",
  fullName: "store.StoresService",
  methods: {
    getStores: {
      name: "GetStores",
      requestType: GetStoresRequest,
      requestStream: false,
      responseType: GetStoresReply,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface StoresServiceImplementation<CallContextExt = {}> {
  getStores(request: GetStoresRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetStoresReply>>;
}

export interface StoresServiceClient<CallOptionsExt = {}> {
  getStores(request: DeepPartial<GetStoresRequest>, options?: CallOptions & CallOptionsExt): Promise<GetStoresReply>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
