pragma solidity ^0.8.11;

contract SampleContract {
    uint data;

    function setData(uint _data) external {
        data = _data;
    }

    function getData() external view returns(uint) {
        return data;
    }
}