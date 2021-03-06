import React from 'react'
import {Heading, Button} from '@luminate/components'

interface DeleteAlertProps {
  heading?: string
  text?: string
  onCancelClick?: () => void
  onConfirmClick?: () => void
  variant?: 'primary' | 'danger'
}

const DeleteAlert = ({heading, text, onCancelClick, onConfirmClick, variant = 'primary'}: DeleteAlertProps) => {
  return (
    <div>
      {heading ? <Heading>{heading}</Heading> : null}
      {text ? <p>{text}</p> : null}
      <div className="flex justify-end px-3 mt-4">
        {onConfirmClick ? (
          <div className="order-1">
            <Button onClick={onConfirmClick} variant={variant}>
              Confirm
            </Button>
          </div>
        ) : null}
        {onCancelClick ? (
          <div className={`mr-${onConfirmClick ? '2' : '0'}`}>
            <Button onClick={onCancelClick} variant="outline">
              Cancel
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default DeleteAlert
