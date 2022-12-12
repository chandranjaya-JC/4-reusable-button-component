import {useEffect} from 'react';
import PropTypes  from 'prop-types';
import className from 'classnames';


// const finalClassName = className('px-3','py-1.5',{
//      'bg-blue-500':true,
//      'text-yellow-500':true,
// })


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
}) {
    
    const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-500 bg-gray-500 text-white':secondary,
        'border-green-500 bg-green-500 text-white':success,
        'border-yellow-500 bg-yellow-500 text-white':warning,
        'border-red-500 bg-red-500 text-white':danger,
        'rounded-full': rounded,
        'bg-white ': outline,
        'text-blue-500': outline && primary,
        'text-grey-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
        
    })
  return (
    <div className='ml-2'>
            <button {...rest}  className={classes}>{children}</button>
    </div>
  )
}
Button.propTypes ={
    checkVariationValue: ({ primary,secondary,success,warning,danger}) => {
        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);
        if(count > 1){
            return new Error(
                'only one of Primary, Secondary, success, warning, danger'
            )
        }
    }
}
export default Button