import { useState } from "react";


export const WithPhoneList = (Component) => {

  return (props) => {
		const {phoneData, ...otherProps} = props
	  const [show, setShow] = useState(true)
	  const showController = () => {
			setShow(!show)
		  console.log(show)
	  }

		return (
			<Component
				show={show}
				showController={showController}
				phoneData={phoneData}
				{...otherProps}
			/>
		)
	}
}