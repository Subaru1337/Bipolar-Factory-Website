import type { Metadata } from 'next'
import Link from 'next/link'
import PageNav from '@/components/layout/PageNav'

export const metadata: Metadata = {
  title: 'Cookie and Privacy Policy — Bipolar Factory',
  description: 'How Bipolar Factory collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <div className="policy-page">
      <PageNav />

      <div className="policy-layout">
        <h1>Cookie and Privacy Policy</h1>

        <article className="policy-body">
          <p>
            At Bipolar Factory, accessible from{' '}
            <a href="https://www.bipolarfactory.com" target="_blank" rel="noopener noreferrer">
              www.bipolarfactory.com
            </a>
            , one of our main priorities is the privacy of our visitors. This Cookie and Privacy Policy
            document contains types of information that is collected and recorded by Bipolar Factory and
            how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not
            hesitate to contact us at{' '}
            <a href="mailto:hello@bipolarfactory.com">hello@bipolarfactory.com</a> or through our{' '}
            <Link href="/contact">contact page</Link>.
          </p>

          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Cookie and Privacy Policy and agree to its
            terms.
          </p>

          <h2>Information we collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to
            provide it, will be made clear to you at the point we ask you to provide your personal
            information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name,
            email address, phone number, the contents of the message and/or attachments you may send us,
            and any other information you may choose to provide.
          </p>
          <p>
            When you register for an account, we may ask for your contact information, including items such
            as name, company name, address, email address, and telephone number.
          </p>

          <h2>How we use your information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2>Log files</h2>
          <p>
            Bipolar Factory follows a standard procedure of using log files. These files log visitors when
            they visit websites. All hosting companies do this as part of hosting services&apos; analytics.
            The information collected by log files includes internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the
            number of clicks. These are not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering the site, tracking users&apos;
            movement on the website, and gathering demographic information.
          </p>

          <h2>Cookies and web beacons</h2>
          <p>
            Like any other website, Bipolar Factory uses cookies. Cookies are used to store information
            including visitors&apos; preferences, and the pages on the website that the visitor accessed or
            visited. The information is used to optimize the users&apos; experience by customizing our web page
            content based on visitors&apos; browser type and/or other information.
          </p>

          <h2>Google DoubleClick DART cookie</h2>
          <p>
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART
            cookies, to serve ads to our site visitors based upon their visit to www.bipolarfactory.com and
            other sites on the internet. Users may opt out of the use of the DART cookie by visiting the
            Google ad and content network Privacy Policy at{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/technologies/ads
            </a>
            .
          </p>

          <h2>Advertising partners privacy policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of
            Bipolar Factory. Third-party ad servers or ad networks use technologies like cookies, JavaScript,
            or web beacons that are used in their respective advertisements and links that appear on
            Bipolar Factory, which are sent directly to users&apos; browsers. They automatically receive your IP
            address when this occurs. These technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content that you see on websites that
            you visit.
          </p>
          <p>
            Note that Bipolar Factory has no access to or control over these cookies that are used by
            third-party advertisers.
          </p>

          <h2>Third party privacy policies</h2>
          <p>
            Bipolar Factory&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we
            are advising you to consult the respective Privacy Policies of these third-party ad servers for
            more detailed information. It may include their practices and instructions about how to opt-out
            of certain options.
          </p>

          <h2>CCPA privacy rights (Do not sell my personal information)</h2>
          <p>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul>
            <li>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected</li>
            <li>Request that a business that sells a consumer&apos;s personal data not sell the consumer&apos;s personal data</li>
          </ul>
          <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of
            these rights, please contact us.
          </p>

          <h2>GDPR data protection rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul>
            <li><strong style={{ color: 'var(--text)' }}>The right to access</strong> — You have the right to request copies of your personal data.</li>
            <li><strong style={{ color: 'var(--text)' }}>The right to rectification</strong> — You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li><strong style={{ color: 'var(--text)' }}>The right to erasure</strong> — You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong style={{ color: 'var(--text)' }}>The right to restrict processing</strong> — You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong style={{ color: 'var(--text)' }}>The right to object to processing</strong> — You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong style={{ color: 'var(--text)' }}>The right to data portability</strong> — You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of
            these rights, please contact us.
          </p>

          <h2>Children&apos;s information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We
            encourage parents and guardians to observe, participate in, and/or monitor and guide their online
            activity.
          </p>
          <p>
            Bipolar Factory does not knowingly collect any Personal Identifiable Information from children
            under the age of 13. If you think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we will do our best efforts to
            promptly remove such information from our records.
          </p>

          <h2>What are cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a
            website. They are widely used to make websites work more efficiently and to provide information
            to the owners of the site.
          </p>

          <h2>How we use cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are
            no industry standard options for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave on all cookies if you are not
            sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2>The cookies we set</h2>
          <ul>
            <li>
              <strong style={{ color: 'var(--text)' }}>Email newsletters related cookies</strong> — This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
            </li>
            <li>
              <strong style={{ color: 'var(--text)' }}>Forms related cookies</strong> — When you submit data through a form such as those found on contact pages, cookies may be set to remember your user details for future correspondence.
            </li>
            <li>
              <strong style={{ color: 'var(--text)' }}>Site preferences cookies</strong> — In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
            </li>
          </ul>

          <h2>Third party cookies</h2>
          <p>
            In some special cases we also use cookies provided by trusted third parties. The following section
            details which third party cookies you might encounter through this site.
          </p>
          <p>
            This site uses Google Analytics, which is one of the most widespread and trusted analytics
            solutions on the web, to help us understand how you use the site and ways that we can improve your
            experience. These cookies may track things such as how long you spend on the site and the pages
            that you visit so we can continue to produce engaging content. For more information on Google
            Analytics cookies, see the official Google Analytics page.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about this Cookie and Privacy Policy, the practices of this site, or
            your dealings with this site, please contact us at{' '}
            <a href="mailto:hello@bipolarfactory.com">hello@bipolarfactory.com</a> or visit our{' '}
            <Link href="/contact">contact page</Link>.
          </p>
        </article>
      </div>
    </div>
  )
}
