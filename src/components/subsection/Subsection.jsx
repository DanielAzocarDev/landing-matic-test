
import { ItemsList } from '../itemsList/ItemsList'
import { Item } from '../item/Item'

import iconOnline from '../../assets/icon-online.png'
import iconBudgeting from '../../assets/icon-budgeting.png'
import iconOnboarding from '../../assets/icon-onboarding.png'
import iconApi from '../../assets/icon-api.png'

import './Subsection.scss'

export const Subsection = () => {

  const data = [
    {
      icon: iconOnline,
      title: 'Online Banking',
      description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      icon: iconBudgeting,
      title: 'Simple Budgeting',
      description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
      icon: iconOnboarding,
      title: 'Fast Onboarding',
      description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
      icon: iconApi,
      title: 'Open API',
      description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
  ]
  return (
    <section className='subsection'>
      <div className='subsection__container'>
        <h2 className='subsection__title'>Why choose Easybank?</h2>
        <p className='subsection__text'>We leverage Open Banking to turn your bank acount into your financial hub. <br /> Control your finances like never before.</p>

        <ItemsList>
          {data.map(item => <Item icon={item.icon} title={item.title} description={item.description} />)}
        </ItemsList>
      </div>
    </section>
  )
}
