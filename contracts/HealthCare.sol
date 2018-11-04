pragma solidity ^0.4.0;

contract HealthCare {

    address hospitalAdmin;
    address labAdmin;

    struct Record {
        string testName;
        uint date;
        string hospitalName;
        uint256 price;
        bool hospitalFlag;
        bool labFlag;
    }

    modifier hAdmin {
        if (msg.sender != hospitalAdmin) throw;
        _;
    }

    modifier lAdmin {
      if (msg.sender != labAdmin) throw;
      _;
    }

    mapping (address => Record) records;

    function newRecord (string _tName, uint _date, string hName, uint256 price) public{
        Record memory newRecord = Record ({
            testName: _tName,
            date: _date,
            hospitalName: hName,
            price: price,
            hospitalFlag: false,
            labFlag: false
        });
    }

}
