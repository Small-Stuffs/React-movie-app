import React, { Component } from 'react';
import styled from 'styled-components';
import rem from '../helpers/rem';
import LayoutContainer from './LayoutContainer';
import Input from './Input';
import Button from './Button';

const StyledSearchWrapper = styled.div`
  margin-top: ${rem(50)};
  position: relative;
`;

const StyledSvg = styled.svg`
  display: block;
  transform: rotate(90deg);
`;
// const SearchForm = () => {

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     inputText: 'this is test',
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearchTermChange(this.state.inputText);
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <LayoutContainer>
          <StyledSearchWrapper>
            <label for="search-movie">
              <Input
                onChange={this.handleChange}
                type="search"
                name="search-movie"
                id="search-movie"
                placeholder="Search movies"
              />
              {/* <Input type="text" value={this.state.inputText} /> */}
              <Button appearance="search">
                <StyledSvg
                  className="c-search__btn-svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>TRAILING ICON</title>
                  <defs>
                    <path
                      d="M15.502 9.491h-.794l-.276.274A6.47 6.47 0 0 1 16 13.991a6.5 6.5 0 1 1-6.5-6.5 6.47 6.47 0 0 1 4.225 1.566l.276-.274v-.792L18.999 3l1.491 1.491-4.988 5zm-6.002 0a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
                      id="a"
                    />
                  </defs>
                  <g
                    transform="translate(-3 -3)"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <mask id="b" fill="#fff">
                      <use xlinkHref="#a" />
                    </mask>
                    <g mask="url(#b)" fill="#FFF">
                      <path d="M0 0h24v24H0z" />
                    </g>
                  </g>
                </StyledSvg>
              </Button>
            </label>
          </StyledSearchWrapper>
        </LayoutContainer>
      </form>
    );
  }
}

export default SearchForm;
