type DialogProps = {
  srcSet: string;
  height: number;
  width: number;
  sizes: string;
  src: string;
  alt: string;
}
export function Dialog({ srcSet, sizes, src, alt, height, width }: DialogProps) {
  return (
    <dialog id="dialog">
      <div className="modal"></div>
      <div className="dialog_image">
        <img
          srcSet={srcSet}
          height={height}
          width={width}
          sizes={sizes}
          src={src}
          alt={alt}
        />
        <a href={src} target="_blank" rel="nofollow" className="white">
          Abrir original
        </a>
      </div>
      <form method="dialog">
        <button>
          <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" stroke-width="1.5" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>            
        </button>
      </form>
    </dialog>
  );
}