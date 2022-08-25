import { getStyles } from 'typestyle';

export default () => (
	<style id='typestyle' dangerouslySetInnerHTML={{ __html: getStyles() }} />
);
