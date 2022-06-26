pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) private _tokenURIs;

  mapping (uint256 => string) private _pricePredictions;
  
  mapping(address => uint256[]) private _ownershipMap;

  // /// @dev Base token URI used as a prefix by tokenURI().
  // string public baseTokenURI;

  constructor() ERC721("MyNFT", "MNFT") {}

  function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
    _tokenURIs[tokenId] = _tokenURI;
  }

  function tokenURI(uint256 tokenId) 
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }

  function mint(address recipient, string memory uri, string memory ethPricePrediction) public returns (uint256) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, uri);
    _pricePredictions[newItemId] = ethPricePrediction;
    _ownershipMap[recipient].push(newItemId);

    return newItemId;
  }


  function getOwnershipMap(address recipient) public view returns (uint256[] memory) {
      return _ownershipMap[recipient];
  }
  
  function getPricePrediction(uint256 itemId) public view returns (string memory) {
    return _pricePredictions[itemId];
  }

  function getMintCount() public view returns (Counters.Counter memory) {
    return _tokenIds;
  }

  // /// @dev Sets the base token URI prefix.
  // function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
  //   baseTokenURI = _baseTokenURI;
  // }
}
