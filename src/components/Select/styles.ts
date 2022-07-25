import styled from "styled-components";
import { Color } from "../../types";
import Select from "react-select";


const StyledSelect = styled(Select)`
	.select__control {
    width: 100%;
		padding: 15px 40px;
		margin-bottom: 45px;
		font-size: 18px;
    font-weight: 400;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }

	.select__value-container {
		padding: 0px;
		text-align: center;
  }

	.select__indicator-separator {
		display: none;
  }

	.select__dropdown-indicator {
		color: ${Color.Grey};
		height: 40;
		width: 50;
	}
`

export { StyledSelect }