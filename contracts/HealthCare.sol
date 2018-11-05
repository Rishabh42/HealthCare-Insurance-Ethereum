pragma solidity ^0.4.0;

contract HealthCare {

    address hospitalAdmin;
    address labAdmin;

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

    event recordCreated(uint256 ID, string testName, string date, string hospitalName, uint256 price);

    modifier signOnly {
        require (msg.sender == hospitalAdmin || msg.sender == labAdmin );
        _;
    }

    mapping (uint256=> Record) _records;
    Record[] public recordsArr;
    Record[] public verifiedRecord;

    function newRecord (string _tName, string _date, string hName, uint256 price) public{
        Record memory newRecord = Record ({
            pAddr: msg.sender,
            ID: recordsArr.length + 1 ,
            testName: _tName,
            date: _date,
            hospitalName: hName,
            price: price,
            signatureCount: 0
        });
        _records[newRecord.ID] = newRecord;
        recordsArr.push(newRecord);
        recordCreated(newRecord.ID, _tName, _date, hName, price);
    }

    function getUnsignedRecords(uint256 _ID) public returns (uint256, string, string, string, uint256){
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
