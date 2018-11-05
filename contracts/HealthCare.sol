pragma solidity ^0.4.25;

contract HealthCare {

    address private hospitalAdmin;
    address private labAdmin;

    struct Record {
        address pAddr;
        uint256 ID;
        string testName;
        string date;
        string hospitalName;
        uint256 price;
        uint8 signatureCount;
        mapping (address => uint8) signatures;
    }

    modifier signOnly {
        require (msg.sender == hospitalAdmin || msg.sender == labAdmin );
        _;
    }

    mapping (uint256=> Record) public _records;
    uint256[] public recordsArr;

    event recordCreated(uint256 ID, string testName, string date, string hospitalName, uint256 price);

    function newRecord (uint256 _ID, string _tName, string _date, string hName, uint256 price) public{
        Record memory _newrecord = Record ({
            pAddr: msg.sender,
            ID: _ID,
            testName: _tName,
            date: _date,
            hospitalName: hName,
            price: price,
            signatureCount: 0
        });
        _records[_ID] = _newrecord;
        recordsArr.push(_newrecord.ID);
        emit  recordCreated(_newrecord.ID, _tName, _date, hName, price);
    }

    function getUnsignedRecords(uint256 _ID) public view returns (uint256, string, string, string, uint256){
        return (_records[_ID].ID, _records[_ID].testName, _records[_ID].date, _records[_ID].hospitalName, _records[_ID].price);
    }

    function hospitalSign(uint256 _ID) signOnly public {
        Record storage records = _records[_ID];

        require(0x0 != records.pAddr);

        require(msg.sender != records.pAddr);

        require(records.signatures[msg.sender] != 1);

        records.signatures[msg.sender] = 1;
        records.signatureCount+1;
    }

}
