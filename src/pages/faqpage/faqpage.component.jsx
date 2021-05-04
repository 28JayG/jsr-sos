import React, { useContext, useEffect, useState } from 'react';
import { ImagesLinks } from '../../constants/routes';
import { FaqsContext } from '../../providers/faqs/faqs.provider';

import Loader from '../../components/common/loader/loader.component';
import MainContainer from '../../components/common/main-container/main-container.component';
import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import FaqToggle from '../../components/common/faq-toggle/faq-toggle.component';
import Appbar from '../../components/common/appbar/appbar.component';

import './faqpage.styles.scss';

const FaqsPage = () => {
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState(null);

  const { fetchFaqs } = useContext(FaqsContext);

  useEffect(() => {
    const fetchFaqsAsync = async () => {
      try {
        setLoading(true);
        let faqs = await fetchFaqs();
        setFaqs(faqs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqsAsync();
  }, []);

  return (
    <div className="faqpage">
      <Appbar title="FAQs" />
      {/* here are faqs */}
      <MainContainer>
        {loading ? (
          <Loader type="linear" />
        ) : (
          faqs &&
          faqs.length > 0 && (
            <section className="faqs">
              {faqs.map((faq, index) => (
                <FaqToggle faq={faq} index={index} key={faq.question} />
              ))}
            </section>
          )
        )}
        <div className="banner">
          <img src={ImagesLinks.VACCINE_IMAGE_URL} alt="vaccine le lo" />
        </div>
      </MainContainer>
      <BottomNav />
    </div>
  );
};

export default FaqsPage;
