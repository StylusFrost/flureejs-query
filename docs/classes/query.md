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
- [getSenderAuthID](query.md#getsenderauthid)
- [getSenderPublicKey](query.md#getsenderpublickey)
- [sign](query.md#sign)
- [validate](query.md#validate)
- [verifySignature](query.md#verifysignature)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new Query**(data?: _[QueryData](../interfaces/querydata.md)_): [Query](query.md)

_Defined in index.ts:32_

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

_Defined in index.ts:31_

---

<a id="_senderpubkey"></a>

### ` <Private>``<Optional> ` \_senderPubKey

**● \_senderPubKey**: _`Buffer`_

_Defined in index.ts:32_

---

<a id="auth"></a>

### auth

**● auth**: _`Buffer`_

_Defined in index.ts:26_

---

<a id="db"></a>

### db

**● db**: _`Buffer`_

_Defined in index.ts:24_

---

<a id="formatteddate"></a>

### formattedDate

**● formattedDate**: _`Buffer`_

_Defined in index.ts:25_

---

<a id="host"></a>

### host

**● host**: _`Buffer`_

_Defined in index.ts:23_

---

<a id="param"></a>

### param

**● param**: _`Buffer`_

_Defined in index.ts:21_

---

<a id="r"></a>

### r

**● r**: _`Buffer`_

_Defined in index.ts:28_

---

<a id="raw"></a>

### raw

**● raw**: _`Buffer`[]_

_Defined in index.ts:20_

---

<a id="s"></a>

### s

**● s**: _`Buffer`_

_Defined in index.ts:29_

---

<a id="type"></a>

### type

**● type**: _`Buffer`_

_Defined in index.ts:22_

---

<a id="v"></a>

### v

**● v**: _`Buffer`_

_Defined in index.ts:27_

---

## Methods

<a id="_overridevsetterwithvalidation"></a>

### `<Private>` \_overrideVSetterWithValidation

▸ **\_overrideVSetterWithValidation**(): `void`

_Defined in index.ts:140_

**Returns:** `void`

---

<a id="_validatev"></a>

### `<Private>` \_validateV

▸ **\_validateV**(v: _`Buffer`_): `void`

_Defined in index.ts:128_

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| `Optional` v | `Buffer` |

**Returns:** `void`

---

<a id="getsenderauthid"></a>

### getSenderAuthID

▸ **getSenderAuthID**(): `Buffer`

_Defined in index.ts:157_

**Returns:** `Buffer`

---

<a id="getsenderpublickey"></a>

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

_Defined in index.ts:169_

**Returns:** `Buffer`

---

<a id="sign"></a>

### sign

▸ **sign**(privateKey: _`Buffer`_): `void`

_Defined in index.ts:223_

**Parameters:**

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| privateKey | `Buffer` |             |

**Returns:** `void`

---

<a id="validate"></a>

### validate

▸ **validate**(): `boolean`

▸ **validate**(stringError: _`false`_): `boolean`

▸ **validate**(stringError: _`true`_): `string`

_Defined in index.ts:202_

**Returns:** `boolean`

_Defined in index.ts:203_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in index.ts:204_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="verifysignature"></a>

### verifySignature

▸ **verifySignature**(): `boolean`

_Defined in index.ts:181_

**Returns:** `boolean`

---
