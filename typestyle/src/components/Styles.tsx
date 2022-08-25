import * as React from 'react';
import { getStyles, setStylesTarget } from 'typestyle';

export default () => {
	const ref = React.useRef<HTMLStyleElement>();

	React.useEffect(() => {
		setStylesTarget(ref.current);
	}, []);

	return (
		<style
			id='typestyle'
			ref={ref}
			dangerouslySetInnerHTML={{ __html: getStyles() }}
		/>
	);
};
