import { compose, lifecycle } from 'recompose';

export default compose(
  lifecycle({
    componentDidMount() {
      console.log('abc');
    }
  })
)