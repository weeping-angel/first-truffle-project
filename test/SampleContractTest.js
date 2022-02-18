const SampleContract = artifacts.require('SampleContract.sol');

contract('SampleContract', () => {
    it('must set data', async () => {
        const c = await SampleContract.new();
        await c.setData(123);
        const data = await c.getData(); // may return a very big number
        assert(data.toString() === '123') // converting data to string since it may exceed the traditional integer limit.
    });
});