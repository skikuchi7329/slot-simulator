import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', padding: '40px 20px', minHeight: '50vh' }}>
        <h2>404: Page Not Found</h2>
        <p>お探しのページは見つかりませんでした。</p>
      </div>
      <Footer />
    </>
  );
}
