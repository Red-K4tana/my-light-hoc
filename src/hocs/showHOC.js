import { useState } from "react";


export function WithPhoneList (Component) {

  return (props) => {
		const {phoneData} = props
	  // eslint-disable-next-line react-hooks/rules-of-hooks
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

			/>
		)
	}
}
