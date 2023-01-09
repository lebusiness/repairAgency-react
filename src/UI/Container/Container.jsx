import './Container.css';
import cn from 'classnames';
export const Container = (props) => {
  const thisProps = {...props, className: cn('container', props.className) }
  return (
    <div {...thisProps}>
      {thisProps.children}
    </div>
  )
};