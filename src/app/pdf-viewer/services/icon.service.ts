import { Injectable } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

export interface SvgIcon {
  /** The name of the icon */
  iconName: string
  /** Its path in our project */
  url: string
}

@Injectable()
export class IconService {
  public customIcons: SvgIcon[] = [
    {
      iconName: 'add-sm',
      url: '/assets/icons/add-sm.svg',
    },
    {
      iconName: 'remove-sm',
      url: '/assets/icons/remove-sm.svg',
    },
  ]

  constructor(
    protected readonly matIconRegistry: MatIconRegistry,
    protected readonly domSanitizer: DomSanitizer
  ) {
    this._init()
  }

  protected _init(): void {
    this.customIcons.forEach((icon: SvgIcon): void => {
      this.matIconRegistry.addSvgIcon(
        icon.iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)
      )
    })
  }
}
