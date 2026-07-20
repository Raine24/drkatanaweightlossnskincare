import React from "react";
import Link from "next/link";
// internal
import { useGetProductTypeCategoryQuery } from "@/redux/features/categoryApi";
import { HomeThreeCategoryLoader } from "../loader";
import ErrorMsg from "../common/error-msg";
import { useRouter } from "next/router";

const BeautyCategory = () => {
  const router = useRouter();
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductTypeCategoryQuery("all");

  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace(/&/g, "")
        .trim()
        .split(/\s+/)
        .join("-")}`
    );
  };

  let content = null;

  if (isLoading) {
    content = <HomeThreeCategoryLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;
    content = category_items.map((item) => (
      <div key={item._id} className="col-lg-4 col-md-6 col-sm-6 mb-30">
        <div
          className="tp-katana-cat-card"
          onClick={() => handleCategoryRoute(item.parent)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleCategoryRoute(item.parent)}
        >
          {/* Photo background */}
          <div
            className="tp-katana-cat-bg"
            style={{ backgroundImage: `url('${encodeURI(item.img)}')` }}
          />

          {/* Light top scrim so image is visible */}
          <div className="tp-katana-cat-scrim" />

          {/* Heavy black-dominant gradient anchored to the bottom text zone only */}
          <div className="tp-katana-cat-grad" />

          {/* Hover shimmer bar */}
          <div className="tp-katana-cat-topbar" />

          {/* Content */}
          <div className="tp-katana-cat-body">
            <span className="tp-katana-cat-count">
              {item.products.length}&nbsp;Products
            </span>
            <h3 className="tp-katana-cat-title">{item.parent}</h3>
            <div className="tp-katana-cat-cta">
              <span>Shop Now</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <style>{`
        /* ── Card shell ───────────────────────────────────────── */
        .tp-katana-cat-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          height: 380px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.22);
          transition: transform 0.38s cubic-bezier(.23,1,.32,1),
                      box-shadow 0.38s cubic-bezier(.23,1,.32,1);
          outline: none;
        }
        .tp-katana-cat-card:hover {
          transform: translateY(-7px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.38), 0 0 0 1.5px rgba(194,24,91,0.45);
        }

        /* ── Background photo ─────────────────────────────────── */
        .tp-katana-cat-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.55s cubic-bezier(.23,1,.32,1);
        }
        .tp-katana-cat-card:hover .tp-katana-cat-bg {
          transform: scale(1.07);
        }

        /*
         * Layer 1 — very light uniform dark tint
         * Just enough to unify the image tone, image still very visible
         */
        .tp-katana-cat-scrim {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.28);
          transition: background 0.35s;
        }
        .tp-katana-cat-card:hover .tp-katana-cat-scrim {
          background: rgba(0, 0, 0, 0.34);
        }

        /*
         * Layer 2 — gradient only on the BOTTOM third
         * 70% black / 25% pink mix → mostly black, hint of brand color
         * Transparent at top so the image photo shows fully
         */
        .tp-katana-cat-grad {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(
            to top,
            rgba(8, 2, 4, 0.97)   0%,
            rgba(12, 3, 6, 0.92)  15%,
            rgba(18, 4, 9, 0.82)  28%,
            rgba(10, 2, 5, 0.60)  42%,
            rgba(5,  1, 3, 0.22)  60%,
            transparent           78%
          );
        }

        /* ── Top shimmer accent line (hover) ─────────────────── */
        .tp-katana-cat-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #C2185B 40%, #f06292 60%, transparent 100%);
          background-size: 300% 100%;
          z-index: 4;
          opacity: 0;
          animation: katanaShimmer 2.4s linear infinite;
          transition: opacity 0.3s;
        }
        .tp-katana-cat-card:hover .tp-katana-cat-topbar {
          opacity: 1;
        }
        @keyframes katanaShimmer {
          0%   { background-position: 100% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Text body — sits over gradient at bottom ─────────── */
        .tp-katana-cat-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 24px 26px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* pill badge */
        .tp-katana-cat-count {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.20);
          color: rgba(255,255,255,0.9);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: 100px;
          width: fit-content;
          margin-bottom: 5px;
        }

        /* title */
        .tp-katana-cat-title {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 10px;
          line-height: 1.2;
          letter-spacing: -0.2px;
          text-shadow: 0 2px 12px rgba(0,0,0,0.55);
        }

        /* shop now cta */
        .tp-katana-cat-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(194,24,91,0.90);
          color: #fff;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 100px;
          width: fit-content;
          border: 1px solid rgba(255,255,255,0.15);
          transition: background 0.25s, gap 0.25s, padding 0.25s;
        }
        .tp-katana-cat-card:hover .tp-katana-cat-cta {
          background: rgba(194,24,91,1);
          gap: 12px;
        }
        .tp-katana-cat-cta svg {
          transition: transform 0.28s;
          flex-shrink: 0;
        }
        .tp-katana-cat-card:hover .tp-katana-cat-cta svg {
          transform: translateX(4px);
        }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .tp-katana-cat-card { height: 320px; }
        }
        @media (max-width: 575px) {
          .tp-katana-cat-card  { height: 270px; }
          .tp-katana-cat-title { font-size: 18px; }
        }
      `}</style>

      <section className="tp-category-area pt-95 pb-65">
        <div className="container">
          <div className="row align-items-end mb-45">
            <div className="col-lg-6 col-md-8">
              <div className="tp-section-title-wrapper-3">
                <span className="tp-section-title-pre-3">Product Collection</span>
                <h3 className="tp-section-title-3">Discover our products</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tp-category-more-3 text-md-end mb-10">
                <Link href="/shop" className="tp-btn">
                  Shop All Products{" "}
                  <svg
                    width="13" height="13"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{ marginLeft: "5px", verticalAlign: "middle" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">{content}</div>
        </div>
      </section>
    </>
  );
};

export default BeautyCategory;
