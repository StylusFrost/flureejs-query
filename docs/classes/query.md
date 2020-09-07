[flureejs-query](../README.md) > [Query](../classes/query.md)

# Class: Query

## Hierarchy

**Query**

## Index

### Constructors

- [constructor](query.md#constructor)

### Properties

- [\_from](query.md#_from)
- [\_senderPubKey](query.md#_senderpubkey)
- [auth](query.md#auth)
- [db](query.md#db)
- [formattedDate](query.md#formatteddate)
- [host](query.md#host)
- [param](query.md#param)
- [r](query.md#r)
- [raw](query.md#raw)
- [s](query.md#s)
- [type](query.md#type)
- [v](query.md#v)

### Methods

- [\_overrideVSetterWithValidation](query.md#_overridevsetterwithvalidation)
- [\_validateV](query.md#_validatev)
- [digest](query.md#digest)
- [getSenderAuthID](query.md#getsenderauthid)
- [getSenderPublicKey](query.md#getsenderpublickey)
- [msg](query.md#msg)
- [sign](query.md#sign)
- [signature](query.md#signature)
- [validate](query.md#validate)
- [verifySignature](query.md#verifysignature)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new Query**(data?: _[QueryData](../interfaces/querydata.md)_): [Query](query.md)

_Defined in [index.ts:32](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L32)_

**Parameters:**

| Name                 | Type                                    | Default value | Description                                                     |
| -------------------- | --------------------------------------- | ------------- | --------------------------------------------------------------- |
| `Default value` data | [QueryData](../interfaces/querydata.md) | {}            | A query can be initialized with object containing them by name. |

**Returns:** [Query](query.md)

---

## Properties

<a id="_from"></a>

### ` <Protected>``<Optional> ` \_from

**● \_from**: _`Buffer`_

_Defined in [index.ts:31](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L31)_

---

<a id="_senderpubkey"></a>

### ` <Private>``<Optional> ` \_senderPubKey

**● \_senderPubKey**: _`Buffer`_

_Defined in [index.ts:32](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L32)_

---

<a id="auth"></a>

### auth

**● auth**: _`Buffer`_

_Defined in [index.ts:26](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L26)_

---

<a id="db"></a>

### db

**● db**: _`Buffer`_

_Defined in [index.ts:24](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L24)_

---

<a id="formatteddate"></a>

### formattedDate

**● formattedDate**: _`Buffer`_

_Defined in [index.ts:25](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L25)_

---

<a id="host"></a>

### host

**● host**: _`Buffer`_

_Defined in [index.ts:23](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L23)_

---

<a id="param"></a>

### param

**● param**: _`Buffer`_

_Defined in [index.ts:21](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L21)_

---

<a id="r"></a>

### r

**● r**: _`Buffer`_

_Defined in [index.ts:28](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L28)_

---

<a id="raw"></a>

### raw

**● raw**: _`Buffer`[]_

_Defined in [index.ts:20](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L20)_

---

<a id="s"></a>

### s

**● s**: _`Buffer`_

_Defined in [index.ts:29](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L29)_

---

<a id="type"></a>

### type

**● type**: _`Buffer`_

_Defined in [index.ts:22](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L22)_

---

<a id="v"></a>

### v

**● v**: _`Buffer`_

_Defined in [index.ts:27](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L27)_

---

## Methods

<a id="_overridevsetterwithvalidation"></a>

### `<Private>` \_overrideVSetterWithValidation

▸ **\_overrideVSetterWithValidation**(): `void`

_Defined in [index.ts:140](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L140)_

**Returns:** `void`

---

<a id="_validatev"></a>

### `<Private>` \_validateV

▸ **\_validateV**(v: _`Buffer`_): `void`

_Defined in [index.ts:128](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L128)_

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| `Optional` v | `Buffer` |

**Returns:** `void`

---

<a id="digest"></a>

### digest

▸ **digest**(): `Buffer`

_Defined in [index.ts:222](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L222)_

**Returns:** `Buffer`

---

<a id="getsenderauthid"></a>

### getSenderAuthID

▸ **getSenderAuthID**(): `Buffer`

_Defined in [index.ts:157](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L157)_

**Returns:** `Buffer`

---

<a id="getsenderpublickey"></a>

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

_Defined in [index.ts:169](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L169)_

**Returns:** `Buffer`

---

<a id="msg"></a>

### `<Private>` msg

▸ **msg**(): `Buffer`

_Defined in [index.ts:227](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L227)_

**Returns:** `Buffer`

---

<a id="sign"></a>

### sign

▸ **sign**(privateKey: _`Buffer`_): `void`

_Defined in [index.ts:258](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L258)_

**Parameters:**

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| privateKey | `Buffer` |             |

**Returns:** `void`

---

<a id="signature"></a>

### signature

▸ **signature**(): `Buffer`

_Defined in [index.ts:191](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L191)_

**Returns:** `Buffer`

---

<a id="validate"></a>

### validate

▸ **validate**(): `boolean`

▸ **validate**(stringError: _`false`_): `boolean`

▸ **validate**(stringError: _`true`_): `string`

_Defined in [index.ts:237](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L237)_

**Returns:** `boolean`

_Defined in [index.ts:238](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L238)_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in [index.ts:239](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L239)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="verifysignature"></a>

### verifySignature

▸ **verifySignature**(): `boolean`

_Defined in [index.ts:181](https://github.com/StylusFrost/flureejs-query/blob/3669f99/src/index.ts#L181)_

**Returns:** `boolean`

---
