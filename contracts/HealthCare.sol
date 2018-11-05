pragma solidity ^0.4.0;

contract HealthCare {

    address hospitalAdmin;
    address labAdmin;

    struct Record {
        uint256 ID;
        string testName;
        string date;
        string hospitalName;
        uint256 price;
        uint8 signatureCount;
        mapping (address => uint8) signatures;
    }

    event recordCreated(uint256 ID, string testName, string date, string hospitalName, uint256 price);

    modifier hospitalOnly {
        require (msg.sender == hospitalAdmin);
        _;
    }

    modifier labOnly {
        require (msg.sender == labAdmin);
        _;
    }

    mapping (uint256=> Record) records;
    Record[] public recordsArr;
    Record[] public verifiedRecord;

    function newRecord (string _tName, string _date, string hName, uint256 price) public{
        Record memory newRecord = Record ({
            ID: recordsArr.length + 1 ,
            testName: _tName,
            date: _date,
            hospitalName: hName,
            price: price,
            signatureCount: 0
        });
        records[newRecord.ID] = newRecord;
        recordsArr.push(newRecord);
        recordCreated(newRecord.ID, _tName, _date, hName, price);
    }

    function getUnsignedRecords(uint256 _ID) public returns (uint256, string, string, string, uint256){
        return (records[_ID].ID, records[_ID].testName, records[_ID].date, records[_ID].hospitalName, records[_ID].price);
    }
}
