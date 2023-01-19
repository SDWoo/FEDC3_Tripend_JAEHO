import SearchIcon from '@mui/icons-material/Search';
import useSearchPost from '../../hooks/useSearchPost';
import {
  SearchContainer,
  SearchInput,
  SearchResultItem,
  SearchResultList,
  SearchWrapper,
  Title,
  Description,
} from './style';

const SearchPost = () => {
  const { keyword, searchResult, handleClickItem, setKeyword } = useSearchPost();

  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchIcon sx={{ color: '#d1d1d1' }} />
        <SearchInput
          value={keyword}
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchContainer>
      {searchResult && (
        <SearchResultList>
          {searchResult.map((item) => (
            <SearchResultItem key={item._id} onClick={() => handleClickItem(item._id)}>
              <Title>{item.title}</Title>
              <Description>{item.country}</Description>
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
    </SearchWrapper>
  );
};

export default SearchPost;
