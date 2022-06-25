pragma solidity ^0.8.4;

interface IdaoContract {
    function balanceOf(address) external view returns (uint256);
}

contract DAO {

    IdaoContract daoContract;
    address[] private membersDAO;

    constructor() {
        daoContract = IdaoContract(0xE3988A93E9e1000FFBE318666849d91a6626784c);
    }

    function joinDAO(address nftHolder) public {
        require(daoContract.balanceOf(nftHolder) >= 1, "You need to mint an ETHGlobalDAO NFT first");
        membersDAO.push(nftHolder);
    }

    function getDAOMembers() public returns (address[] memory) {
        return membersDAO;
    }
}