pragma solidity ^0.8.4;

interface IdaoContract {
    function balanceOf(address) external view returns (uint256);
}

contract DAO {

    IdaoContract daoContract;
    address[] private membersDAO;
    uint256 proposalId;
    mapping(uint256 => proposal) public Proposals;

    struct proposal{
        uint256 id;
        string description;
        string choice1;
        string choice2;
        string choice3;
    }

    constructor() {
        daoContract = IdaoContract(0xE3988A93E9e1000FFBE318666849d91a6626784c); // address of NFT contract
        proposalId = 1;
    }

    function joinDAO(address nftHolder) public {
        require(daoContract.balanceOf(nftHolder) >= 1, "You need to mint an ETHGlobalDAO NFT first");
        membersDAO.push(nftHolder);
    }

    function getDAOMembers() public returns (address[] memory) {
        return membersDAO;
    }

    function createProposal(string memory _description, string memory _choice1,string memory _choice2,string memory _choice3) public {
        require(daoContract.balanceOf(msg.sender) >= 1, "You need to mint an ETHGlobalDAO NFT before creating proposals");

        proposal storage newProposal = Proposals[proposalId];
        newProposal.id = proposalId;
        newProposal.description = _description;
        newProposal.choice1 = _choice1;
        newProposal.choice2 = _choice2;
        newProposal.choice3 = _choice3;

        proposalId++;
    }

    function getProposal(uint256 proposalId) public returns (proposal memory) {
        return  Proposals[proposalId];
    }

    // voteProposal()

    // getProposalVotes()
}