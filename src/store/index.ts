import {createStore, Mutation, Store} from 'vuex'
import { InjectionKey } from 'vue'
import {
  IApiAbout,
  IApiContact,
  IApiExhibitionsAndAwards, IApiHomeImage,
  IApiInfo,
  IApiManifesto,
  IApiProject, IApiTags,
  IApiTheyWorkWithUs, ISecondTags
} from "@/api"

// define your typings for the store state

export interface State {
  projects: IApiProject[]

  tags: IApiTags[]
  activatedTags: string[]

  secondaryTag: ISecondTags[]
  activatedSecondaryTag: string | null

  contact: IApiContact | null
  menuIsOpen: boolean
  idOfOpenedProject: null | string
  about:          IApiAbout | null
  award:          IApiExhibitionsAndAwards | null
  manifesto:      IApiManifesto | null
  info:           IApiInfo | null
  theyWorkWithUs: IApiTheyWorkWithUs | null
  homeImages:     IApiHomeImage[] | null
  isMobileWidth:  boolean
  isDeskWidth:    boolean
}

export interface IStoreMutation {
  [key: string]: Mutation<State>
  updateProjects        (state: State, projects:       IApiProject[]): void

  updateTags            (state: State, tags:           IApiTags[]): void
  tagsListAddTag        (state: State, tagToAdd:       string): void
  tagsListRemoveTag     (state: State, tagToRemove:    string): void

  updateSecondaryTags               (state: State, tags: ISecondTags[]): void
  ToggleSecondaryTagActivated       (state: State, tagToToggle:       string): void

  updateContact         (state: State, contact:        IApiContact): void
  updateAbout           (state: State, about:          IApiAbout): void
  updateAward           (state: State, award:          IApiExhibitionsAndAwards): void
  updateManifesto       (state: State, manifesto:      IApiManifesto): void
  updateInfo            (state: State, info:           IApiInfo): void
  updateTheyWorkWithUs  (state: State, theyWorkWithUs: IApiTheyWorkWithUs): void
  updateHomeImages      (state: State, homeImages: IApiHomeImage[]): void
  updateScreenWidth     (state: State, screenWidth: number): void
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    projects: [],

    tags: [],
    activatedTags: [],

    secondaryTag: [],
    activatedSecondaryTag: null,

    contact: null,
    menuIsOpen: false,
    idOfOpenedProject: null,
    about: null,
    award: null,
    info: null,
    manifesto: null,
    theyWorkWithUs: null,
    homeImages: null,
    isDeskWidth: false,
    isMobileWidth: false,
  },
  mutations: {
    updateProjects(state, projects) {
      state.projects = projects
    },

    updateTags(state: State, tags: IApiTags[]) {
      state.tags = tags
    },
    tagsListAddTag(state: State, tagToAdd: string) {
      state.activatedTags.push( tagToAdd )
    },
    tagsListRemoveTag(state: State, tagToRemove: string) {
      const indexOfTagToRemove = state.activatedTags.indexOf( tagToRemove )
      if( indexOfTagToRemove > -1 ) state.activatedTags.splice( indexOfTagToRemove, 1 )
      else console.error(`can't remove ${tagToRemove}, because isn't in activatedTags array stored`)
    },

    updateSecondaryTags(state: State, secondaryTags: ISecondTags[]) {
      state.secondaryTag = secondaryTags
    },

    ToggleSecondaryTagActivated(state: State, tagToToggle: string) {
      if ( state.activatedSecondaryTag === tagToToggle) state.activatedSecondaryTag = null
      else state.activatedSecondaryTag = tagToToggle
    },

    updateContact(state, contact) {
      state.contact = contact
    },
    updateAbout(state: State,  about: IApiAbout) {
      state.about = about
    },
    updateAward(state: State, award: IApiExhibitionsAndAwards) {
      state.award = award
    },
    updateInfo(state: State, info: IApiInfo) {
      state.info = info
    },
    updateManifesto(state: State, manifesto: IApiManifesto) {
      state.manifesto = manifesto
    },
    updateTheyWorkWithUs(state: State, theyWorkWithUs: IApiTheyWorkWithUs) {
      state.theyWorkWithUs = theyWorkWithUs
    },
    updateHomeImages(state: State, homeImages: IApiHomeImage[]) {
      state.homeImages = homeImages
    },
    updateScreenWidth(state: State, screenWidth: number) {

      const mobileBreakPoint = 900
      const isMobileWidth = screenWidth < mobileBreakPoint

      state.isMobileWidth = isMobileWidth
      state.isDeskWidth   = !isMobileWidth
    },

  } as IStoreMutation,
  actions: {
  },
  modules: {
  }
})
