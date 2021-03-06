import nock from 'nock'

function mockEsploraApi () {
  nock('https://blockstream.info:443', { 'encodedQueryParams': true })
    .get('/testnet/api/tx/d4b1add055db58343500157a6525a73ceb9c8850f0fb435f1f60071e8cad6540')
    .reply(200, { 'txid': 'd4b1add055db58343500157a6525a73ceb9c8850f0fb435f1f60071e8cad6540', 'version': 1, 'locktime': 0, 'vin': [{ 'txid': 'cc03b91ab4c7b9fd97d8e49cef7a9386f45c9da51e77faf8b1d77be070577a44', 'vout': 1, 'prevout': { 'scriptpubkey': 'a914b1ca47496d9e10b431358ab9cb013b6fe006991087', 'scriptpubkey_asm': 'OP_HASH160 OP_PUSHBYTES_20 b1ca47496d9e10b431358ab9cb013b6fe0069910 OP_EQUAL', 'scriptpubkey_type': 'p2sh', 'scriptpubkey_address': '2N9THuntcLXpjnkN5KWAeVMTYMDQyARMzXz', 'value': 976798 }, 'scriptsig': '2200200153e49dbc4a122f47a87755382629dbdf7ede36e3c1c42b52da81f93ca3e6c3', 'scriptsig_asm': 'OP_PUSHBYTES_34 00200153e49dbc4a122f47a87755382629dbdf7ede36e3c1c42b52da81f93ca3e6c3', 'witness': ['', '30440220232266d87dfba9ffd31632d4622a2067b9b00585a576f9e556e165fd19e73f2f022016277e17a658ec3d5d9c4f2d1cc224c38324f3af79227c61ece057e78ed6bc5b01', '30440220285b4e87b91a521e164f206e551b40ddc1bfd3780a7390511d069ebcae49353602207ab1c35a9b550c799bbb7ec3f0fcdcb60df637e39b1707fa5d9220aad1c470db01', '5221021b082273dfca34fa34501dd892968815ecb9dc1f0601db1e91c37ef85834c6ec210300dc67d16010e32b98bd66690ab0ea56e9e24cd0287a5fa22ac8040fbe9f7c7652ae'], 'is_coinbase': false, 'sequence': 4294967295, 'inner_redeemscript_asm': 'OP_0 OP_PUSHBYTES_32 0153e49dbc4a122f47a87755382629dbdf7ede36e3c1c42b52da81f93ca3e6c3', 'inner_witnessscript_asm': 'OP_PUSHNUM_2 OP_PUSHBYTES_33 021b082273dfca34fa34501dd892968815ecb9dc1f0601db1e91c37ef85834c6ec OP_PUSHBYTES_33 0300dc67d16010e32b98bd66690ab0ea56e9e24cd0287a5fa22ac8040fbe9f7c76 OP_PUSHNUM_2 OP_CHECKMULTISIG' }], 'vout': [{ 'scriptpubkey': 'a9149d3c916e0ebea90c4fc385aed2f8a5bed9595c2987', 'scriptpubkey_asm': 'OP_HASH160 OP_PUSHBYTES_20 9d3c916e0ebea90c4fc385aed2f8a5bed9595c29 OP_EQUAL', 'scriptpubkey_type': 'p2sh', 'scriptpubkey_address': '2N7acdkCmEdifRvoWtX7GCiGMoKSM68AgjB', 'value': 100000 }, { 'scriptpubkey': 'a914b1ca47496d9e10b431358ab9cb013b6fe006991087', 'scriptpubkey_asm': 'OP_HASH160 OP_PUSHBYTES_20 b1ca47496d9e10b431358ab9cb013b6fe0069910 OP_EQUAL', 'scriptpubkey_type': 'p2sh', 'scriptpubkey_address': '2N9THuntcLXpjnkN5KWAeVMTYMDQyARMzXz', 'value': 850018 }], 'size': 370, 'weight': 820, 'fee': 26780, 'status': { 'confirmed': true, 'block_height': 1574469, 'block_hash': '000000000000015df12c1a2656f4284edc7c8130d68112d5e522b5d22f79b2b0', 'block_time': 1565777199 } }, ['Server',
      'nginx',
      'Date',
      'Thu, 15 Aug 2019 12:45:10 GMT',
      'Content-Type',
      'application/json',
      'Content-Length',
      '2234',
      'cache-control',
      'public, max-age=157784630',
      'Access-Control-Allow-Origin',
      '*',
      'Via',
      '1.1 google',
      'Alt-Svc',
      'clear',
      'Connection',
      'close'])

  nock('https://blockstream.info:443', { 'encodedQueryParams': true })
    .get('/testnet/api/blocks/tip/height')
    .reply(200, 1574672, ['Server',
      'nginx',
      'Date',
      'Thu, 15 Aug 2019 12:45:08 GMT',
      'Content-Type',
      'text/plain',
      'Content-Length',
      '7',
      'Access-Control-Allow-Origin',
      '*',
      'Via',
      '1.1 google',
      'Cache-Control',
      'public, max-age=10',
      'Age',
      '3',
      'Alt-Svc',
      'clear',
      'Connection',
      'close'])
}

export default mockEsploraApi
