import { getCssText } from '../../stitches.config';

export default () => (
	<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
);
